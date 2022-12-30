
function apartmentHunting(blocks, reqs) {
    let minDistanceToReqs = reqs.map((item) => getMinDistance(item,blocks))
    // console.log(minDistanceToReqs)
    let maxDistanceToAllReq = getMaxDistanceToAllReq(minDistanceToReqs, reqs, blocks)
    return maxDistanceToAllReq.indexOf(Math.min(...maxDistanceToAllReq))
  }
  
  function getMinDistance(item, blocks){
    let result = blocks.map((el) => Infinity)
    let currentClosest = Infinity
    for(let i = 0; i < blocks.length; i++){
      let currBlock = blocks[i]
      if(currBlock[item]) currentClosest = i
      result[i] = Math.abs(currentClosest - i)
    }
    
    for(let j = blocks.length - 2; j >= 0; j--){
      let currBlock = blocks[j]
      if(currBlock[item]) currentClosest = j
      result[j] = Math.min(result[j], Math.abs(currentClosest - j))
    }
    return result
  }
  
  function getMaxDistanceToAllReq(nestedArr,reqs, blocks){
  let maxDistance = []
    for(let i = 0; i < blocks.length; i++){
        let currMaxDistance = -Infinity
        for(let j = 0; j < nestedArr.length; j++){
            currMaxDistance = Math.max(currMaxDistance, nestedArr[j][i])
        }
        
        maxDistance[i] = currMaxDistance
    }
    return maxDistance
  }
function superbowlWin (record) {

    const winner = record.find(r => r.result === "W")
    if (winner) {
        return winner.year
    } else {
        return undefined
    }
    
}

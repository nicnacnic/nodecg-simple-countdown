const timeLeft = nodecg.Replicant('timeLeft');

NodeCG.waitForReplicants(timeLeft).then(() => {

    timeLeft.on('change', (newVal, oldVal) => {
        document.getElementById('main').innerHTML = newVal;
    })
})
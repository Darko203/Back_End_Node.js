const {getCharacter} = require('rickmortyapi');
let cache = {};
const getSingleCharacters = async(req, res) => {
    try {
         let ctime = new Date().getTime();
    if(cache[req.params.id] && (ctime - cache[req.params.id].timestamp) < (30 *1000)) {
        res.status(200).send(cache[req.params.id].data);
        return;
    }
        
        const data = await getCharacter(Number(req.params.id));

        cache[req.params.id] = {
            timestamp: new Date().getTime(),
            data: data
        };

        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getSingleCharacters
}
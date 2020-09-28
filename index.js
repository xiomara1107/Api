const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "nombre":"series"     
    };
    res.json(data);
});

module.exports = router;
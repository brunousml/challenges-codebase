import { Router } from 'express'

export const router = Router()

router.get('/', (req, res) => res.status(200).send('Brain Agriculture API'))
router.post('/farmer', (req, res) => res.status(201).send())
router.patch('/farmer/:id', (req, res) => {
    const farmerId = req.params.id;

    console.log(`Editing farmer with ID: ${farmerId}`);
    res.status(200).send(`Edit a Farmer with ID: ${farmerId}`);
})
router.delete('/farmer/:id', (req, res) => {
    const farmerId = req.params.id;

    console.log(`Deleting farmer with ID: ${farmerId}`);
    res.status(200).send(`Delete a Farmer with ID: ${farmerId}`);
})
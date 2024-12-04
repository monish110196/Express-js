const userService = require('../services/userService');

const createUser = async (req, res) => {
    try {
        const { name, email, age, address } = req.body;

        const { user, profile } = await userService.createUserWithProfile(
            { name, email },
            { age, address }
        );

        res.status(201).json({ message: 'User and Profile created', user, profile });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await userService.getUserWithProfile(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
};

module.exports = {
    createUser,
    getUser,
};
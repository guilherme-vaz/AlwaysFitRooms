const { prisma } = require("../prisma/client")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserController = {
    createUser: async (req, res) => {
        const { name, email, password } = req.body
        const userAlreadyExists = await prisma.users.findUnique({
            where: {
                email
            }
        })

        if (userAlreadyExists) {
            return res.status(400).json({ error: "Email already exists" });
        }

        //Criando usuário
        const hashedPassword = await bcrypt.hash(password, 8)
        const newUser = await prisma.users.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })

        return res.status(201).json(result)
    },
    getAllUsers: async (req, res) => {
        try {
            const users = await prisma.user.findMany()

            return res.status(200).json(users);
        } catch (error) {
            console.error('Error:', error);
            return res.status(500).json({ message: 'Error' });
        }
    },
    getUserById: async (req, res) => {
        const userId = req.params.id;

        try {
            const user = await prisma.users.findUnique(userId);
            console.log(user)

            if (!user) {
                return res.status(404).json({ message: 'User not found!' });
            }

            return res.status(200).json(user);
        } catch (error) {
            console.error('Error:', error);
            return res.status(500).json({ message: 'Error' });
        }
    },
    loginUser: async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await prisma.users.findUnique({ where: { email } });
            if (!user) {
                return res.status(401).json({ error: "Falha na autenticação do usuário." });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ error: "Falha na autenticação do usuário, por favor cheque suas credenciais " });
            }

            const token = jwt.sign({ userId: user.id }, "your-secret-key", {
                expiresIn: "1h"
            });

            res.cookie("jwt", token, { httpOnly: true, secure: true, sameSite: "strict" });
            res.json({ message: "Authentication successful" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
};



module.exports = UserController;

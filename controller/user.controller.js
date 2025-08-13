import User from "../model/User.js"

export const createUserController = async (req, res) => {
    const { email, username, phoneNumber, password } = req.body
    if (!email || !username || !phoneNumber || !password) {
        return res.status(400).json({ message: "please fill in all the data fields", user: null })
    }

    try {
        const existingEmail = await User.findOne({ email })
        if (existingEmail) {
            return res.status(400).json({ message: "user with the email already exists", user: null })

        }
        const newUser = new User({ email, username, phoneNumber, password })
        await newUser.save()
        return res.status(200).json({ message: "user creeated successfully", user: newUser })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Internal server error", user: null })

    }
}

export const loginController = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: "please fill in all the data fields", isAuthenticated: false })
    }

    try {
        const existingUser = await User.findOne({ email, password })
        if (existingUser) {
            return res.status(200).json({ message: "user logged in successfully", isAuthenticated: true })
        }
        return res.status(500).json({ message: "invalid username or password", isAuthenticated: false })


    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Internal server error", isAuthenticated: false })
    }
}
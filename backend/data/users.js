import bcrypt from "bcryptjs"

const users = [
    {
        name: "Admin User",
        email: "admin@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name: "Giorgi Giorgadze",
        email: "giogio@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false
    },
    {
        name: "Nika Nikauri",
        email: "niko@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false
    }
]

export default users;
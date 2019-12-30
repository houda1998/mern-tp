const User = require("../database/users")
module.exports = {
    fetchAll: async function (req,res) {
        res.json(await User.find({}))
    },
    fetchAll: async function (req, res) {
        const  {page, size } = req.params
        res.json(await User.find({}).skip(page * size).limit(parseInt(size)))
    },
    insertOne: function (req, res) {
        const {username, gender,dob,news,email,photo } = req.body
        const newUSer = new User({ username,gender,dob,news,email,photo})
        newUSer.save()
            .then((newuser) => {
                console.log(newuser)
                res.json(newUSer);
            })
            .catch(err => {
                console.error(err)
                res.status(400).json({ error: err });
            })
    },
    findOne: async function (req, res) {
        const { id } = req.params
        try{
            const user = await User.findOne({ _id: id })
            if (user) {
                res.json(user)
            }
            else throw {error:"not Found"}
        }catch(err){
            res.status(404).json(err)
        }
    },
    update: async function (req, res) {
        const { id } = req.params
        const data = { ...req.body }
        User.findByIdAndUpdate(id, data)
            .then(user => {
                res.json(user)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },
    delete: async function (req, res) {
        const { id } = req.params
        try {
            const user = await User.findOne({ _id: id })
            if (user) {
                //delete
                user.deleteOne()
                .then(()=>{

                })
                .catch(err => {
                    res.status(400).json(err)
                })
                res.json(user)

            }
            else throw { error: "not Found" }
        } catch (err) {
            res.status(404).json(err)
        }
    }
}
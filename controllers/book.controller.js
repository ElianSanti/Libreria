const {response} = require('express');
const Libro = require('../models/Libro')

const createBook = async(req, res) => {
    const {name, author, year, keywords, editorial} = req.body

    try {
        const dbLibro = new Libro(req.body)

        await dbLibro.save();

        return res.status(200).json({
            ok:true,
            name,
            author,
            year,
            keywords,
            editorial
        })
    } catch (error) {
        return res.status(400).json({
            ok:false,
            msg:'No se ha podido guardar el libro, intentelo de nuevo',
            error
        })
    }
}

const updateBook = (req, res) => {
    const id = req.params.id
    
    const dbLibro = Libro.updateOne({_id:id},
        {$set: req.body},
        (error)=>{
            if (error) {
                return res.status(400).json({
                    ok:false,
                    error
                }) 
            } else {
                return res.status(200).json({
                    ok:true,
                    msg:'Libro actualizado!'
                })
            }
        })
}

const deleteBook = (req, res) => {
    const id = req.params.id

    const dbLibro = Libro.findByIdAndDelete({_id:id},
        (error)=>{
            if (error) {
                return res.status(400).json({
                    ok:false,
                    error
                })
            } else {
                return res.status(200).json({
                    ok:true,
                    msg:'Libro eliminado!'
                })
            }
        })
}

const viewBooks = async(req, res) => {
    try {
        const dbLibro = await Libro.find({})
        return res.status(200).json({
            ok:true,
            Libros: dbLibro
        })
    } catch (error) {
        return res.status(400).json({
            ok:false,
            msg:'No hay libros',
            error
        })
    }
}

const viewBook = async(req,res) => {
    const id = req.params.id
    try {
        const dbLibro = await Libro.findById({_id:id})

        return res.status(200).json({
            ok:true,
            Libro: dbLibro
        })
    } catch (error) {
        return res.status(400).json({
            ok:false,
            msg:'No existe ese libro',
            error
        })
    }
}

module.exports = {
    createBook,
    updateBook,
    deleteBook,
    viewBooks,
    viewBook
}
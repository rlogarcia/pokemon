module.exports =(sequelize, DataTypes)=>{
    return sequelize.define('Usuario',{
        cedula:{
            type:DataTypes.string,
            primaryKey:true,
            allowNull:false,
            unique:'cedula'
        },
        email:{
            type:DataTypes.string,
            allowNull:false,
            unique:'email'
        },
        nombre:{
            type:DataTypes.string,
            allowNull:false,
        },
        edad:{
            type:DataTypes.INTEGER,
            allowNull:false,
        }
    },{
        tableName: 'usuario',
        timestamps:true
    });      
};
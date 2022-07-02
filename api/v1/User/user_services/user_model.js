

module.exports=(sequelize,DataTypes) =>{

    const User = sequelize.define("user",{
        fullname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        address:{
            type:DataTypes.STRING
        },
        gender:{
            type:DataTypes.STRING
        },
        mobile:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        
        personal_image:{
            type:DataTypes.STRING,
            required:true
        }

    })
    return User
}
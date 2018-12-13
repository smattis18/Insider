module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      post_header: {
        type: DataTypes.STRING,
        allowNull: false
      },
      post_body: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'beginTime',
        defaultValue: sequelize.literal('NOW()')
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'nextTime',
        defaultValue: sequelize.literal('NOW()')
      }
    });

    Post.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });

      Post.hasMany(models.Comment, {
        onDelete: "cascade"
      });
  
    };

    return Post;
  };
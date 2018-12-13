module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      comment_body: {
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

    Comment.associate = function(models) {
      
      Comment.belongsTo(models.Post, {
        foreignKey: {
          allowNull: false
        }
      });

    };

    return Comment;
  };
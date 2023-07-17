'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// RAD define association here
		}
	}
	Users.init(
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				primaryKey: true,
				default: sequelize.fn('uuid_generate_v4'),
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			first_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isEmail: true,
				},
			},
			password: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			phone: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			avatar: {
				allowNull: false,
				type: DataTypes.TEXT,
			},
			is_active: {
				allowNull: false,
				type: DataTypes.BOOLEAN,
			},
			created_at: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updated_at: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		},
		{
			sequelize,
			modelName: 'Users',
			tableName: 'users',
			underscored: true,
			timestamps: true,
			scopes: {
				view_public: { attributes: ['id'] },
				view_same_user: { attributes: ['id', 'email'] },
				auth_flow: { attributes: ['id', 'email'] },
				view_me: { attributes: ['id', 'email'] },
			},
			hooks: {
				beforeCreate: (user, options) => {
					if (user.email) {
						let emailLowercase = String(user.email).toLowerCase();
						user.email = emailLowercase;
					}
				},
			},
		}
	);
	return Users;
};

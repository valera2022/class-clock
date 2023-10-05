# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

u1 = User.create(name:"jose",username:"josesito",password:"hello",password_confirmation:"hello")
u2 = User.create(name:"john",username:"jhonsina",password:"hello",password_confirmation:"hello")
p1 = Pitch.create(name:"curve",pitch_average_speed:"80")
p2 = Pitch.create(name:"fast",pitch_average_speed:"92")
p3 = Pitch.create(name:"changeUp",pitch_average_speed:"85")
Note.create(content:"lets go",user_id:u1.id,pitch_id:p1.id)#gera
Note.create([{content:"lets use it",user_id:u2.id,pitch_id:p2.id},{content:"lets do it",user_id:u2.id,pitch_id:p1.id}])#john
Note.create(content:"lets get it",user_id:u1.id,pitch_id:p3.id)


#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

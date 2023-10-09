# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

u1 = User.create(name:"jose",username:"josesito",password:"hello",password_confirmation:"hello")
u2 = User.create(name:"john",username:"jhonsina",password:"hello",password_confirmation:"hello")
p1 = Pitch.create(name:"Curveball",pitch_average_speed:"80",history: "In baseball and softball, the curveball is a type of pitch thrown with a characteristic grip and hand movement that imparts forward spin to the ball, causing it to dive as it approaches the plate. Varieties of curveball include the 12-6 curveball, power curveball, and the knuckle curve. Its close relatives are the slider and the slurve. The 'curve' of the ball varies from pitcher to pitcher.

The expression 'to throw a curveball' essentially translates to introducing a significant deviation to a preceding concept.")
p2 = Pitch.create(name:"Fastball",pitch_average_speed:"92",history:"The fastball is the most common type of pitch thrown by pitchers in baseball and softball. 'Power pitchers,' such as former American major leaguers Nolan Ryan and Roger Clemens, rely on speed to prevent the ball from being hit and have thrown fastballs at speeds of 95-105 miles per hour (153-169 km/h) (officially) and up to 108.1 miles per hour (174.0 km/h) (unofficially). Pitchers who throw more slowly can put movement on the ball, or throw it on the outside of home plate where batters cannot easily reach it.")
p3 = Pitch.create(name:"Knuckleball",pitch_average_speed:"85",history:"A knuckleball or knuckler is a baseball pitch thrown to minimize the spin of the ball in flight, causing an erratic, unpredictable motion. The air flow over a seam of the ball causes the ball to change from laminar to turbulent flow. This change adds a deflecting force to the baseball, making it difficult for batters to hit but also difficult for pitchers to control and catchers to catch; umpires are challenged as well, as the ball's irregular motion through the air makes it harder to call balls and strikes. A pitcher who throws knuckleballs is known as a knuckleballer.")
Note.create(content:"lets go",user_id:u1.id,pitch_id:p1.id)#gera
Note.create([{content:"lets use it",user_id:u2.id,pitch_id:p2.id},{content:"lets do it",user_id:u2.id,pitch_id:p1.id}])#john
Note.create(content:"lets get it",user_id:u1.id,pitch_id:p3.id)


#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

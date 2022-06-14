const drill = (id, title, tags, stars, instructions) => {
  return {
    id,
    title,
    tags,
    stars,
    instructions,
  };
};

const data = [
  {
    id: 1,
    title: "Warmup",
    drills: [
      drill(
        1,
        "Head Up Freestyle",
        ["Swim", "Sprint"],
        4,
        `head up front crawl without ball.`
      ),
      drill(
        2,
        "3 Kick 1 Pull",
        ["Swim", "Kick"],
        4,
        `This is breaststroke.
        but for every 3 kicks.
        its one arm pull.`
      ),
      drill(
        3,
        "Reverse Eggbeater",
        ["Swim", "Arms", "Legs"],
        4,
        `Facing closest wall.
        legs up behind, hands out in front sculling.
        going backwards with slow eggbeater legs to work arms.`
      ),
      drill(
        4,
        "6 to 4 Sprints",
        ["Swim", "Sprints"],
        4,
        `6 x 25m sprints on 30 seconds. 
        then 4 x 25m sprints of 25 seconds.
        do this twice, change time to rest depending.`
      ),
    ],
  },
  {
    id: 2,
    title: "Passing",
    drills: [
      drill(
        1,
        "Shoot/Pass Heavy",
        ["Shoot", "Passing"],
        4,
        `Eggbeater for 30 seconds ball on head to tire legs, immediately receive a pass 
        and quick release shot or pass to the next person.       
        Practice shooting under duress similar to game situations.        
        Vary: Use a Waited Ball: After legs are tired, eggbeater chest out of the water and drop the ball to shoot or pass 
        // Sprint: Sprint a short distance, then work legs, then shoot or pass to the next person.`
      ),
      drill(
        2,
        "4 Corners",
        ["Shoot", "Passing"],
        4,
        `6 players or more.         
        Begin with 4 players in a square (2 players on the posts and the 3m, 2 players on the posts and 5m )         
        an additional player at center cage and the 7 meter line to pass, and a goalie.         
        The player at the 7 meter line starts with the ball and passes to whomever they wish in the square.        
        This player catches the ball dry and passes to another player in the square,
        who passes to another who passes to the final player.      
        After all four players have received a pass the last player in the square passes back to the original player at the 7m.        
        This player in turn passes to the goalie signaling everyone to rotate.         
        While rotating the goalie passes to the next player in line at the 7m.         
        The ball should never stop moving in this drill, players must think ahead and rotate early while watching for the ball.`
      ),
      drill(
        3,
        "10 Dry Move Away",
        ["Shoot", "Passing"],
        4,
        `After all four players have received a pass the last player in the square passes back to the original player at the 7m.        
        This player in turn passes to the goalie signaling everyone to rotate.        
        While rotating the goalie passes to the next player in line at the 7m.      
        The ball should never stop moving in this drill, players must think ahead and rotate early while watching for the ball.`
      ),
      drill(
        4,
        "Zipper Passing",
        ["Passing"],
        4,
        `Two rows lined up outside posts lengthwise.
        Ball starts closest to the cage, players pass to the opposite line 1 at a time.
        The last man to receive ball dribbles toward the cage to start the drill over.
        This is a continuous drill and works best with multiple balls in at once.
        Vary: Types of passes // Have players spin or real before passing // last player to receive the ball dribbles toward the cage to shoot before returning to the opposite line, goalie starts the drill with the first pass.`
      ),
      drill(
        5,
        "Long & Short",
        ["Passing"],
        4,
        `3 players: two players 8m apart and one in the middle. Ball starts off with the 
        outside player who passes to the inside player who passes back to the outside 
        player. The outside player passes all the way to the other outside player while 
        the middle player turns around to receive a pass from this player. The middle 
        player passes back again to the new outside player who again passes all the 
        way across to the other outside player.`
      ),
      drill(
        6,
        "Fish Pond",
        ["Passing"],
        4,
        `All players spread out in the pool, every 2nd or 3rd player has a ball. Players 
        practice constant movement while passing and catching dry. Vary: types of 
        passes // offense and defense // everyone swims backstroke // wet passes`
      ),
      drill(
        7,
        "Dribble & Pass",
        ["Passing"],
        4,
        `2 man drill, partners spread across the length of the pool. One partner starts off 
        by passing all the way across dry and sprints toward his partner. Once the partner catches the ball he gives a timing pass to the sprinter. Repeat process until 
        the sprinter crosses pool. Vary: have the sprinter dribble for three strokes before passing // have the sprinter eggbeater in shooting position before passing`
      ),
      drill(
        8,
        "Continuous Passing",
        ["Passing"],
        4,
        `3 players, two on one side one on the other, the groups are about 8m apart, 
        ball with the person in the back on the side with two players. The person in 
        front sprints forward head up, rolling over midway to the other player to receive 
        a timing pass. Once he dribbles all the way to the third player, the third player 
        sprints to the other side to repeat the process.`
      ),
      drill(
        9,
        "5-Man Keep Away",
        ["Working"],
        4,
        `Drill starts with 3 players on offense, in a triangle, 2 meters apart, and 2 players 
        on defense in the middle. Offense practices passing the ball without throwing 
        it high and can only hold onto the ball for 1-3 seconds before passing. Offense practices creating space to get open to receive pass. Defense works on 
        changing body positions to lunge block passes, also work on head over hips to 
        change direction and pushing off of offensive players to move between players 
        quickly.
        Offense must make sure to remain within 2-3 meters of the other offensive 
        players to allow defense to make steals. Work on getting back to original spot 
        after creating space and separating to receive a pass.`
      ),
    ],
  },
  {
    id: 3,
    title: "Shooting",
    drills: [
      drill(
        1,
        "Mobility",
        ["Shoot", "Mobility"],
        4,
        `1 player is the shooter and has to stay between the posts of the cage,as well 
        as saying in between the 2 meter and 5 meter lines. 3-5 other players line up in 
        an umbrella around the shooter, each with a ball. The shooter must catch a ball 
        while moving and take a quick release shot, immediately start swimming again 
        to get a pass from a remaining player with the ball. The shooter must communicate with the passers and the passers must work on timing passes.`
      ),
      drill(
        2,
        "Quick 5",
        ["Shoot", "Mobility"],
        4,
        `5 consecutive shots, work on quick release. Mimic game situations: 5 outside 
        wet passes to a shooter at the 2 position who draws the foul and shoots immediately // Cross pass from the 5 position to the 2 position, quick release shot 
        // Players receive ball from behind them, practice catching dry, turning, sliding 
        forward, then getting up to shoot.`
      ),
      drill(
        3,
        "North South",
        ["Shoot", "Mobility"],
        4,
        `Players line up in two line, the first players starting at the 5 meter line with other 
        players lining up behind. The player with the ball passes to the first player in the 
        other line who locks the goalie with a fake and passes back for a quick shot. 
        The shooter goes to the end of the opposite line and the drill continues with the 
        other line starting off with the ball.`
      ),
      drill(
        4,
        "Defending The Drive",
        ["Shoot", "Mobility", "Defending"],
        4,
        `Two players line up at 7 meters. Player in front is on offense starts out with the 
        ball, the other player defends and starts off at the waist of the offensive player 
        on either side. Offensive player tries to cut off defense working on road-hog 
        and creating space to get a high percentage shot off. Defense works on getting 
        around offensive player without drawing the ejection to foul or flip the ball out 
        and stop the shot.`
      ),
      drill(
        5,
        "Direct The Attack",
        ["Shoot", "Mobility", "Defending"],
        4,
        `Set up umbrella having perimeter players put the ball into the hole and passed 
        back out quickly. 2 meter player then directs the play telling the offensive player 
        whether to shoot, pass back, or swing it down line. Vary: Hole Set communicates non-verbally. // Run a double set.`
      ),
      drill(
        6,
        "Man Drill",
        ["Shooting"],
        4,
        `Shooter on the post and 5 meters away from cage. Partner eggbeaters shooter 
      down, shooter has to fight to keep head up, after 10 seconds partner tries to 
      completely submerge shooter. Once the shooter has ben completely submerged 
      he has to eggbeater up high for 5 quick passes to catch and shoot quickly`
      ),
      drill(
        7,
        "9 Man Drill",
        ["Shooting"],
        4,
        `Shooters at 2, 3, 4 positions. Make two lines of defense, each with 3 players. 
        The first line pesters shooters (splashing and taunting), the 2nd line field blocks 
        the shots. Shooters must learn to shoot under stress and around blockers`
      ),
      drill(
        8,
        "Shot After The Foul",
        ["Shooting"],
        4,
        `Two players at the 7 meter line, one defender and one offender with a ball. The 
        player on offense must eggbeater the player on defense to the 5 meter line and 
        either use a quarter turn to draw the foul or ste-out to the side without drawing 
        a foul to shoot. Vary: Have a passer start the drill, the player on offense either 
        drives up to receive a pass or pretends to drive and rears back to receive a 
        pass to immediately shoot or draw the foul and then shoot`
      ),
    ],
  },
  {
    id: 4,
    title: "Scrimmage Situations",
    drills: [
      drill(
        1,
        "4-Man Scrum",
        ["Scrummage"],
        4,
        `Scrum - a place or situation of confusion and racket; hubbub; short for 
        scrummage, a variation of scrimmage. Start playing ½ court scrimmage (4 on 
        4). If defense steals the ball offense gets it back as a corner throw. If offense 
        scores they take it up top. If goalie stops offensive shot both teams counter to 
        the opposite side of the pool`
      ),
      drill(
        2,
        "Shooter Trails",
        ["Scrummage"],
        4,
        `Normal scrimmage except that whoever shoots the ball or loses the ball has to 
        touch the cage of the opposing team before countering to defense.`
      ),
      drill(
        3,
        "Tug Of War",
        ["Scrummage"],
        4,
        `Normal scrimmage except that every goal scored against you takes away one 
        of your points. So if you are playing first team to reach 5 points wins and your 
        team scores 4 points but the other team scores 2 points, you still need 3 points 
        to win`
      ),
      drill(
        4,
        "Continuous 6v5",
        ["Scrummage"],
        4,
        `Normal scrimmage except that every goal scored against you takes away one 
        of your points. So if you are playing first team to reach 5 points wins and your 
        team scores 4 points but the other team scores 2 points, you still need 3 points 
        to win`
      ),
      drill(
        5,
        "Round Robin",
        ["Scrummage"],
        4,
        `3 different teams of players, 2 teams play at once, winners keep playing while 
        losers have to do up and outs or a different endurance exercises.
        `
      ),
    ],
  },
  {
    id: 5,
    title: "Games",
    drills: [
      drill(
        1,
        "Survival",
        ["Games"],
        4,
        `All players start on one side of the pool. On the coaches signal all players sprint 
      to the other side of the pool and attempt to keep their head above water while 
      dunking others. If a player gets dunked he is out. Vary: Add a time limit, if there 
      is more than one player remaining above water within 2 minutes, there is no 
      winner. `
      ),
      drill(
        2,
        "5-Alive",
        ["Games"],
        4,
        `All players line up center cage behind 5 meter line, each player has 5 lives 
        to begin with. One player starts as goalie in the cage, this player may get an 
        additional life. The first player in line has the ball and takes a 5-meter shot 
        (one continuous motion) if the player makes the shot the goalie loses a life and 
        remains in the cage. If the player misses the shot he becomes the goalie. Also if 
        the player misses the shot the next player in line may shoot immediatly without 
        waiting for the new goalie to set up in the cage. At all other times the shooter 
        must make sure the goalie is ready before taking their shot. Once players lose 
        all of their lives they are out. The last player to score on a goalie who is out 
        becomes the nw goalie. Vary: Have goalies who are out stay in as goalie until 
        they block a shot.`
      ),
      drill(
        3,
        "Racked",
        ["Games"],
        4,
        `2-player game, ½ of the goal gets used if players aren’t goalies. Shooter has to 
      make 5 of 10 shots or the player must hang backwards on the cage with head 
      down and feet up while other player takes a shot at them from half court.`
      ),
      drill(
        4,
        "Horse",
        ["Games"],
        4,
        `Players take shots on the goalie, if they make the shot the player after them 
      must make the same shot or else get a letter added to his score. Keep playing 
      until one player has enough letters to spell horse.`
      ),
      drill(
        5,
        "Keep Away",
        ["Games"],
        4,
        `All players spread out, begin with a neutral throw. Both teams try to retain 
      possession of the ball and steal from their opponents. Vary: The player who 
      loses the ball for his team must do pushups or sprints. // players can only hold 
      the ball for 1-3 seconds before passing or they turn the ball over and must do 
      pushups or sprints. // Continually narrow the field of play to make the players 
      work on creating space and movement more efficiently. // Players must make 
      every pass dry or the ball is turned over.`
      ),
      drill(
        6,
        "Pickle",
        ["Games"],
        4,
        `All players line up in two teams, each team branching off from the same corner 
        of the pool, both teams number off. Coach begins the drill with a neutral throw 
        and calls out a number signaling players from each team who must sprint to get 
        the ball and bring it back to the corner of the pool. Vary: Call multiple numbers 
        to send in more players to fight for the ball at once. // Have a water bottle at 
        the corner between the hand rales that the players must knock over to score a 
        point. // Have goalies in both cages and players must fight to score`
      ),
    ],
  },
];

export default data;

var app = angular.module("tarot", []);
app.controller("tarotCtrl", function($scope){
	$scope.rand = Math.floor((Math.random() * 78) + 1);
	$scope.tarotCards=[
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-fool.jpg",
			name: "O, The Fool",
			desc: "Beginnings, Innocence, Impulsiveness, Newness"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-magician.jpg",
			name: "The Magician",
			desc: "Mystery, Intuition, Patience, Duality"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-empress.jpg",
			name: "The Empress",
			desc: "Materialism, Fertility, Protection, Satisfaction"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-emperor.jpg",
			name: "The Emperor",
			desc: "Structure, Order, Security, Discipline"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-hierophant.jpg",
			name: "The Hierophant",
			desc: "Tradition, Institutions, Knowledge, Rules"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-lovers.jpg",
			name: "The Lovers",
			desc: "Harmony, Divine, Blessed, Trust"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-chariot.jpg",
			name: "The Chariot",
			desc: "Force, Emotion, Control, Victory"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/strength.jpg",
			name: "Strength",
			desc: "Character, Courage, Conviction, Endurance"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-hermit.jpg",
			name: "The Hermit",
			desc: "Isolation, Enlightenment, Sacrifice, Transformation"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/wheel-of-fortune.jpg",
			name: "Wheel of Fortune",
			desc: "Destiny, Change, Foretelling, Cycles"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/justice.jpg",
			name: "Justice",
			desc: "Law, Reflection, Authority, Fairness"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-hanged-man.jpg",
			name: "The Hanged Man",
			desc: "Choice, Passivity, Relinquishing, Attainment"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/death.jpg",
			name: "Death",
			desc: "Transition, Progress, Necessity, Inevitability"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/temperance.jpg",
			name: "Temperance",
			desc: "Reconstruction, Moderation, Balance, Integration"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-devil.jpg",
			name: "The Devil",
			desc: "Corruption, Indulgence, Ignorance, Resistance"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-tower.jpg",
			name: "The Tower",
			desc: "Destruction, Necessity, Cleansing, Foundation"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-star.jpg",
			name: "The Star",
			desc: "Comfort, Divinity, Faith, Rejuvenation"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-moon.jpg",
			name: "The Moon",
			desc: "Illusion, Deception, Subconscious, Perception"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-sun.jpg",
			name: "The Sun",
			desc: "Clarity, Redemption, Success, Celebration"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/judgement.jpg",
			name: "Judgement",
			desc: "Rebirth, Integration, Development, Restoration"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-world.jpg",
			name: "The World",
			desc: "Completion, Victory, Achievement, Affirmation"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/ace-of-pentacles.jpg",
			name: "Ace of Pentacles",
			desc: "Resources, Goals, Gifts, Wealth"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/two-of-pentacles.jpg",
			name: "Two of Pentacles",
			desc: "Balance, Change, Flexibility, Restraint"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/three-of-pentacles.jpg",
			name: "Three of Pentacles",
			desc: "Service, Cooperation, Potential, Fulfillment"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/four-of-pentacles.jpg",
			name: "Four of Pentacles",
			desc: "Gain, Greed, Hoarding, Selfishness"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/five-of-pentacles.jpg",
			name: "Five of Pentacles",
			desc: "Misfortune, Materialism, Comfort, Salvation"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/six-of-pentacles.jpg",
			name: "Six of Pentacles",
			desc: "Generosity, Discernment, Kindness, Rewards"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/seven-of-pentacles.jpg",
			name: "Seven of Pentacles",
			desc: "Choices, Reflection, Harvest, Accomplishment"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/eight-of-pentacles.jpg",
			name: "Eight of Pentacles",
			desc: "Dedication, Security, Application, Experience"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/nine-of-pentacles.jpg",
			name: "Nine of Pentacles",
			desc: "Abundance, Perfection, Satisfaction, Self-worth"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/ten-of-pentacles.jpg",
			name: "Ten of Pentacles",
			desc: "Sharing, Gifts, Inheritance, Legacy"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/page-of-pentacles.jpg",
			name: "Page of Pentacles",
			desc: "Responsibility, Opportunity, Preservation, Knowledge"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/knight-of-pentacles.jpg",
			name: "Knight of Pentacles",
			desc: "Success, Character, Assessment, Loyalty"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/queen-of-pentacles.jpg",
			name: "Queen of Pentacles",
			desc: "Nurturing, Security, Generosity, Trustworthiness"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/king-of-pentacles.jpg",
			name: "King of Pentacles",
			desc: "Stability, Wealth, Profitability, Competence"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/ace-of-cups.jpg",
			name: "Ace of Cups",
			desc: "Love, Potential, Intuition, Spirituality"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/two-of-cups.jpg",
			name: "Two of Cups",
			desc: "Harmony, Connection, Partnership, Reservation"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/three-of-cups.jpg",
			name: "Three of Cups",
			desc: "Joy, Success, Community, Blessings"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/four-of-cups.jpg",
			name: "Four of Cups",
			desc: "Carelessness, Disappointment, Moderation, Discernment"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/five-of-cups.jpg",
			name: "Five of Cups",
			desc: "Sadness, Grief, Imbalance, Hope"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/six-of-cups.jpg",
			name: "Six of Cups",
			desc: "Memories, Inspiration, Fertility, Simplicity"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/seven-of-cups.jpg",
			name: "Seven of Cups",
			desc: "Choice, Delusion, Temptation, Prudence"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/eight-of-cups.jpg",
			name: "Eight of Cups",
			desc: "Stagnation, Apathy, Self-discovery, Sacrifice"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/nine-of-cups.jpg",
			name: "Nine of Cups",
			desc: "Satisfaction, Abundance, Happiness, Peace"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/ten-of-cups.jpg",
			name: "Ten of Cups",
			desc: "Serenity, Completion, Blessedness, Joy"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/page-of-cups.jpg",
			name: "Page of Cups",
			desc: "Imagination, Beginnings, Compassion, Romanticism"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/knight-of-cups.jpg",
			name: "Knight of Cups",
			desc: "Calmness, Idealism, Messages, Seduction"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/queen-of-cups.jpg",
			name: "Queen of Cups",
			desc: "Insight, Healing, Magnetism, Secrecy"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/king-of-cups.jpg",
			name: "King of Cups",
			desc: "Sympathy, Diplomacy, Indecisiveness, Moderation"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/ace-of-wands.jpg",
			name: "Ace of Wands",
			desc: "Energy, Creativity, Health, Unpredictability"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/two-of-wands.jpg",
			name: "Two of Wands",
			desc: "Application, Cohesiveness, Willpower, Control"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/three-of-wands.jpg",
			name: "Three of Wands",
			desc: "Strength, Success, Teamwork, Self-respect"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/four-of-wands.jpg",
			name: "Four of Wands",
			desc: "Achievement, Rest, Order, Reinvestment"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/five-of-wands.jpg",
			name: "Five of Wands",
			desc: "Conflict, Conscience, Priorities, Strategy"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/six-of-wands.jpg",
			name: "Six of Wands",
			desc: "Recognition, confidence, dedication, arrogance"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/seven-of-wands.jpg",
			name: "Seven of Wands",
			desc: "Bravery, Morality, Conviction, Readiness"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/eight-of-wands.jpg",
			name: "Eight of Wands",
			desc: "Energy, Speed , power, transformation"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/nine-of-wands.jpg",
			name: "Nine of Wands",
			desc: "Stamina, Vigilance, Progress, Potential"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/ten-of-wands.jpg",
			name: "Ten of Wands",
			desc: "Burden, Responsibility, Determination, Release"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/page-of-wands.jpg",
			name: "Page of Wands",
			desc: "Catalyst, Creation, Conception, Fearlessness"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/knight-of-wands.jpg",
			name: "Knight of Wands",
			desc: "Daring, Support, Spontaneity, Exuberance"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/queen-of-wands.jpg",
			name: "Queen of Wands",
			desc: "Ambition, Constancy, Stubbornness, Guidance"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/king-of-wands.jpg",
			name: "King of Wands",
			desc: "Vision, Leadership, Compassion, Idealism"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/ace-of-swords.jpg",
			name: "Ace of Swords",
			desc: "Power, Insight, Clarity, Achievement"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/two-of-swords.jpg",
			name: "Two of Swords",
			desc: "Stalemate, Barriers, Defensiveness, Stubbornness"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/three-of-swords.jpg",
			name: "Three of Swords",
			desc: "Betrayal, Grief, Pain, Challenge"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/four-of-swords.jpg",
			name: "Four of Swords",
			desc: "Rest, Recovery, Truce, Quiet"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/five-of-swords.jpg",
			name: "Five of Swords",
			desc: "Disillusion, Deception, Spoils, Resignation"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/six-of-swords.jpg",
			name: "Six of Swords",
			desc: "Escape, Balance, Guidance, Renewal"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/seven-of-swords.jpg",
			name: "Seven of Swords",
			desc: "Cunning, Guile, Confidence, Indecision"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/eight-of-swords.jpg",
			name: "Eight of Swords",
			desc: "Entrapment, Helplessness, Self-discipline, Courage"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/nine-of-swords.jpg",
			name: "Nine of Swords",
			desc: "Regret, Anguish, Apprehension, Distortion"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/ten-of-swords.jpg",
			name: "Ten of Swords",
			desc: "Disaster, Karma, Ending, Rebirth"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/page-of-swords.jpg",
			name: "Page of Swords",
			desc: "Insight, Perception, Subtlety, Unraveling"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/knight-of-swords.jpg",
			name: "Knight of Swords",
			desc: "Suddenness, Hostility, Fearlessness, Invincibility"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/queen-of-swords.jpg",
			name: "Queen of Swords",
			desc: "Clarity, Intuition, Honesty, Wisdom"
		},
		{
			src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/king-of-swords.jpg",
			name: "King of Swords",
			desc: "Judgment, Incorruptibility, Ability, Activity"
		}
	];
	$scope.refresh = function(){
		$scope.rand = Math.floor((Math.random() * 78) + 1);
	};
});

app.directive("tarotCard", function() {
    return {
       template : `<h3>{{tarotCards[rand].name}}</h3>
		<div class='container'>
			<div class='row'>
				<div class='col-md-12'>
					<img class='img-ctr' src='{{tarotCards[rand].src}}' alt='{{tarotCards[rand].name}}'>
				</div>
				<p>\"{{tarotCards[rand].desc}}\"</p>
			</div>
		</div>`
    };
});

$(document).ready(function(){
	
	$('.question').on('click', '#submit', function(){
		if($('.your-question').val() == ""){
			// lol this is so bad
		} else {
			$ques = $('.your-question').val();
		
			$('.question').animate({
				opacity: "0"
			}, 3000).promise().done(function(){

				$('.question').css('height', 'auto');
				$('.question').html("<p>"+$ques+"</p><br><br>");

				$('.tarot').css('position', 'relative');
				$('.question').animate({opacity:"+=1"}, 3000).promise().done(function(){
					$('.tarot').css('visibility', 'visible');
						$('.tarot').animate({
							opacity: "+=1"
						});
					});

			});

		}
		
		$('#refresh').on('click', function(){
			angular.element($('#tarot-card')).scope().refresh();
			
			$('.tarot').animate({opacity:"0"}, 3000).promise().done(function(){
				$('.question').html(`<p class="question-fates">What do you wish to ask the Fates?</p>
		<input class="your-question" type="text">
		<button id="submit" class="submit">Submit to the Fates</button>`);
				
			angular.element($('#tarot-card')).scope().$apply();
					$('.question').css('visibility', 'visible');
						$('.question').animate({
							opacity: "+=1"
						});
					});
		});
		
	});
	
});
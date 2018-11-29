const AllPlayerPrompt = require('../allplayerprompt');

class GameStartPrompt extends AllPlayerPrompt {
    constructor(game) {
        super(game);
        this.clickedButton = {};
    }

    completionCondition(player) {
        return !!this.clickedButton[player.name];
    }

    activePrompt() {
        return {
            promptTitle: 'Start Game',
            menuTitle: this.game.activePlayer.name + ' won the flip and is first player.',
            buttons: [{ text: 'Start the Game' }]
        };
    }

    waitingPrompt() {
        return { menuTitle: 'Waiting for opponent to indicate they are ready' };
    }

    menuCommand(player) {
        this.clickedButton[player.name] = true;
        return true;
    }
}

module.exports = GameStartPrompt;

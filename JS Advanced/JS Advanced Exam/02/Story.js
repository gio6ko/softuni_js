class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = new Map();
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length === 1) {
            let username = this._likes[0];
            return `${username} likes this story!`
        } else {
            let username = this._likes.shift();
            return `${username} and ${this._likes.length} others like this story!`
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        } else if (this.creator === username) {
            throw new Error("You can't like your own story!");
        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`
        }
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }
        let index = this._likes.indexOf(username);
        this._likes.splice(index, 1);
        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        if (id === undefined || this._comments.get(id) === undefined) {
            let comment = {
                id: this._comments.size + 1,
                username,
                content,
                replies: []
            }
            this._comments.set(this._comments.size + 1, comment);
            return `${username} commented on ${this.title}`
        } else if (this._comments.get(id) !== undefined) {
            let comment = this._comments.get(id);
            comment.replies.push({
                id: `${id}.${comment.replies.length + 1}`,
                username,
                content
            })

            return "You replied successfully";
        }
    }

    toString(sortingType) {
        let sorted = [];
        let result = '';
        if (sortingType === 'asc') {
            sorted = Array.from(this._comments.entries())
                .sort((a, b) => a[0] - b[0]);
            sorted.forEach(e => {
                if (e[1].replies.length > 0) {
                    e[1].replies.sort((a, b) => a.id.localeCompare(b.id))
                }
            });
        } else if (sortingType === 'desc') {
            sorted = Array.from(this._comments.entries())
                .sort((a, b) => b[0] - a[0]);

            sorted.forEach(e => {
                if (e[1].replies.length > 0) {
                    e[1].replies.sort((a, b) => b.id.localeCompare(a.id))
                }
            })
        } else if (sortingType === 'username') {
            sorted = Array.from(this._comments.entries())
                .sort((a, b) => a[1].username.localeCompare(b[1].username));

            sorted.forEach(e => {
                if (e[1].replies.length > 0) {
                    e[1].replies.sort((a, b) => a.username.localeCompare(b.username))
                }
            })
        }

        result += `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:`


        sorted.forEach(e => {
            result += `\n-- ${e[1].id}. ${e[1].username}: ${e[1].content}`;
            if(e[1].replies.length>0){
                e[1].replies.forEach(reply=>{
                    result += `\n--- ${reply.id}. ${reply.username}: ${reply.content}`
                })
            }
        })

        return result;
    }

}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('asc'));

class Text {
    constructor(obj) {
        this.text = document.querySelector(obj.text)
        this.fulltext = this.text.innerHTML
        this.text.innerHTML = ''
        this.str()
    }
    str(x = 0) {
        this.text.innerHTML += this.fulltext[x]
        x++

        if (x < this.fulltext.length) {
            setTimeout(() => {
                this.str(x)
            }, 15);
        }
    }
}
const text = new Text({
    text: '.product__main-text'
})

class FadeLoad {
    constructor(obj){
        this.el = document.querySelectorAll(obj.el)
        window.addEventListener("load", this.transition.bind(this))
    }
    transition(){
        this.el.forEach((card)=>{
            const speed = card.getAttribute('data-speed')
            card.style.transition = `${speed}ms`
            card.classList.remove('fade-left')
            card.classList.add('active')    
        })
    }
}

const headerImg = new FadeLoad({
    el: ".product__pic-img",
    parent: ".product__pic"
})


class FadeY {
    constructor(obj){
        this.parent = document.querySelector(obj.parent)
        this.el = document.querySelectorAll(obj.el)
            window.addEventListener("scroll", this.transition.bind(this))
    }
    transition(){
        // console.log(this.parent.offsetHeight/2);
        if(window.scrollY >= this.parent.offsetTop - this.parent.offsetHeight) {
            this.el.forEach(card=>{
                const speed = card.getAttribute('data-speed')
                card.style.transition = `${speed}ms`
                card.classList.add('active')
            })
        }
    }
}

const scrollCards = new FadeY({ 
    el: ".service-cards-card",
    parent: ".service-cards"
})
const teamCards = new FadeY({
    el: ".team__cards-card",
    parent: ".team__cards"
})


class FadeX {
    constructor(obj){
        this.parent = document.querySelector(obj.parent)
        this.el = document.querySelectorAll(obj.el)
            window.addEventListener("scroll", this.transition.bind(this))
    }
    transition(){
        // console.log(this.parent.offsetHeight/2);
        if(window.scrollY >= this.parent.offsetHeight*2.5) {
            this.el.forEach(card=>{
                const speed = card.getAttribute('data-speed')
                card.style.transition = `${speed}ms`
                card.classList.add('active')
            })
        }
    }
}

const projectDesc = new FadeX({
    el: ".projects__project-desc",
    parent: ".projects__project"
})
const projectDescImg = new FadeX({
    el: ".projects__project-pic-img",
    parent: ".projects__project"
})
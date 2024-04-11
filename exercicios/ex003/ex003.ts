class Review {
    star

    constructor(star?: number | boolean){
        if(star) {
            this.star=star
        } else {
            this.star=false
        }
    }
}

const toyStoryReview = new Review(1)
const ironManReview = new Review(2)
const antManReview = new Review(3)
const hulkReview = new Review(4)
const bmfReview = new Review(5)
const herReview = new Review()

function reviewCount(review: Review){
    if(review.star === 1){
        console.log(`Esse filme recebeu uma nota: ${review.star}`)
    } else if (review.star === 2) {
        console.log(`Esse filme recebeu uma nota: ${review.star}`)
    } else if (review.star === 3) {
        console.log(`Esse filme recebeu uma nota: ${review.star}`)
    } else if (review.star === 4) {
        console.log(`Esse filme recebeu uma nota: ${review.star}`)
    } else if (review.star === 5) {
        console.log(`Esse filme recebeu uma nota: ${review.star}`)
    } else {
        console.log('O filme ainda não foi avaliado!')
    }
}

reviewCount(toyStoryReview)
reviewCount(ironManReview)
reviewCount(antManReview)
reviewCount(hulkReview)
reviewCount(bmfReview)
reviewCount(herReview)

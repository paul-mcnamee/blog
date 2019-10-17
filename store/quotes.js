export const state = () => ({
    list: []
})

export const mutations = {
    add(state, quote, author) {
        state.list.push({
            quote: quote,
            author: author
        })
    },
}

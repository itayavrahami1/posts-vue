
import { bookService } from '@/services/bookService.js';


export default {
    state: {
        books: null,
        booksFilterBy: {
            title: '',
            min: 0,
            max: Infinity,
        }
    },
    getters: {
        booksToShow(state) {
            const filterForRegEx = state.booksFilterBy.title.length ? `${state.booksFilterBy.title}\w*` : ''
            const filterRegEx = new RegExp(filterForRegEx, 'i')
            return state.books?.filter((book) => {
                return (
                    filterRegEx.test(book.title) &&
                    book.listPrice.amount > state.booksFilterBy.min &&
                    book.listPrice.amount < state.booksFilterBy.max
                )
            })
        },
        nextPrevBookId: (state) => (id) => {
            return bookService.getNextPrevIds(id)
        }
    },
    mutations: {
        setBooks(state, { books }) {
            state.books = books
        },
        removeBook(state, { id }) {
            const idx = state.books.findIndex(book => book._id === id)
            state.books.splice(idx, 1)
        },
        saveBook(state, { book }) {
            const idx = state.books?.findIndex(currBook => book._id === currBook._id)
            if (idx === -1) state.books.push(book)
            else state.books.splice(idx, 1, book)
        },
        setBooksFilterBy(state, { filterBy }) {
            filterBy.max = filterBy.max || Infinity
            state.booksFilterBy = filterBy
        }
    },
    actions: {
        async getBooks({ commit }) {
            try {
                const books = await bookService.query()
                commit({ type: 'setBooks', books })
            } catch (err) {
                console.log('ExpActions: err in loadBooks', err);
            }
        },
        async removeBook({ commit }, { id, title }) {
            try {
                await bookService.remove(id)
                commit({ type: 'removeBook', id })
                commit({
                    type: 'setMsg', msg: {
                        txt: `The book "${title}" was successefuly removed`,
                        type: 'success'
                    }
                })
            } catch (err) {
                console.log('ExpActions: err in removeBook', err);
                commit({
                    type: 'setMsg', msg: {
                        txt: `failed to remove book`,
                        type: 'fail'
                    }
                })
            } finally {
                setTimeout(() => {
                    commit({ type: 'setMsg', msg: { txt: '', type: '' } })
                }, 2500)
            }
        },
        async saveBook({ commit }, { book,comment }) {
            try {
                const savedBook = await bookService.save(book)
                commit({ type: 'saveBook', book: savedBook })
                const msgTxt = (comment === 'reviewAdded') ? 'Review Added':`The book "${savedBook.title}" was successefuly added to your e-Library`
                commit({
                    type: 'setMsg', msg: {
                        txt: msgTxt,
                        type: 'success'
                    }
                })
            } catch (err) {
                console.log('ExpActions: err in saveBook', err);
                commit({
                    type: 'setMsg', msg: {
                        txt: `failed to remove book`,
                        type: 'fail'
                    }
                })
            } finally {
                setTimeout(() => {
                    commit({ type: 'setMsg', msg: { txt: '', type: '' } })
                }, 2500)
            }
        },
        async getBookById(context, { id }) {
            return await bookService.getById(id)
        },
        async getGoogleBooks(context, { title }) {
            const googleBooks = await bookService.getGooglsBookByTitle(title)
        }
    },
    modules: {}
}
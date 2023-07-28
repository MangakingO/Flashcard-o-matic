import { deleteDeck, deleteCard } from "../../utils/api"

export async function requestDeckDelete(deckid) {
    const abortController = new AbortController()
    try {
        if (window.confirm(`Are you sure that you want to delete this deck?`))
            return await deleteDeck(deckid, abortController.signal)
        return undefined
    } catch (error) {
        if (error.name !== "AbortError")
            throw error
    }
}

export async function requestCardDelete(cardid) {
    const abortController = new AbortController()
    try {
        if (window.confirm(`Are you sure that you want to delete this card?`))
            return await deleteCard(cardid, abortController.signal)
        return undefined
    } catch (error) {
        if (error.name !== "AbortError")
            throw error
    }
}
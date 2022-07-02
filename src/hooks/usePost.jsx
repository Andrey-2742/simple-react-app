import {useMemo} from "react";

export const useSortedComments = (comments, sort) => {
    const sortedComments = useMemo(() => {
        return sort
            ? [...comments].sort((a, b) => a[sort].localeCompare(b[sort]))
            : comments;
    }, [sort, comments]);

    return sortedComments;
}

export const useSortedFilteredComments = (comments, sort, query) => {
    
    const sortedComments = useSortedComments(comments, sort);

    const sortedFilteredComments = useMemo(() => {
        return query
            ? sortedComments.filter(
                c => c.author.includes(query.toLowerCase())
                || c.text.includes(query.toLowerCase()))
            : sortedComments;
    }, [query, sortedComments]);

    return sortedFilteredComments;
}

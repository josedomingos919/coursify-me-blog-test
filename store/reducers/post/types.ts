import { ActionsTypes } from "./actions/types"

export type PostStateType = {
    pending?: boolean,
    posts?: Array<PostType>,
    error?: null
}

export type CategoryType = {
}

export type PostActionsType = {
     type?: ActionsTypes,
     payload?: PostStateType 
}

/** POST **/

export type PostGuidType = {
    rendered: string
}

export type PostTitleType = {
    rendered: string
}

export type PostContentType = {
    rendered: string, 
}

export type PostExcerptType = {
    rendered: string,
    protected: boolean
}

export type PostMetaType = {
    amp_status: string
}
 
export type PostLinksSelfType = {
    href: string
}

export type PostLinksCollectionType = {
    href: string
}

export type TypePostLinksAboutType = {
    href: string
}


export type TypePostLinksAuthorType = {
    embeddable: boolean,
    href: string
}

export type TypePostLinksRepliesType = {
    embeddable: boolean,
    href: string
}

export type TypePostLinksVersionHistoryType = {
    count: number,
    href: string
}
 
export type TypePostLinksPredecessorVersionType = {
    id: number, 
    href: string
}

export type TypePostLinksWpFeaturedmediaType = {
    embeddable: boolean,
    href: string
}

export type TypePostLinksWpAttachmentType = {
    href: string
}

export type TypePostLinksWpTermType = {
    taxonomy: string,
    embeddable: boolean,
    href: string
}

export type TypePostLinksCuriesType = {
    name: string,
    href: string,
    templated: boolean
}

export type PostLinksType = {
    self: PostLinksSelfType,
    collection: PostLinksCollectionType,
    about: TypePostLinksAboutType,
    author: Array<TypePostLinksAuthorType>,
    replies: Array<TypePostLinksRepliesType>,
    "version-history": Array<TypePostLinksVersionHistoryType>,
    "predecessor-version": Array<TypePostLinksPredecessorVersionType>,
    "wp:featuredmedia": Array<TypePostLinksWpFeaturedmediaType>,
    "wp:attachment": Array<TypePostLinksWpAttachmentType>,
    "wp:term": Array<TypePostLinksWpTermType>,
    curies: Array<TypePostLinksCuriesType>
}

export type PostType ={ 
    id: number,
    date: string,
    date_gmt: string,
    guid: PostGuidType,
    modified: string,
    modified_gmt: string,
    slug: string,
    status: string,
    type: string,
    link: string,
    title: PostTitleType,
    content: PostContentType,
    excerpt: PostExcerptType,
    author: number,
    featured_media: number,
    comment_status: string,
    ping_status: string,
    sticky: boolean,
    template: string,
    format: string,
    meta: PostMetaType,
    categories: Array<number>,
    tags: Array<number>,
    page_views: number,
    _links: PostLinksType,
}
 
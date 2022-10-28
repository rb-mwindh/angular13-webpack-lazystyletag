interface LazyStyleTag {
    use(): void;
    unuse(): void;
}

declare module '*.theme.scss' {
    const content: LazyStyleTag;
    export default content;
}
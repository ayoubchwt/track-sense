function AuthHeader({ title, description }: { title: string, description: string }) {
    return <div className="flex flex-col gap-5">
        <h1 className="text-lg font-semibold text-(--text)">
            {title}
        </h1>
        <p className="text-sm font-light text-(--text-light)">
            {description}
        </p>
    </div>
}
export default AuthHeader;
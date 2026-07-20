function AuthHeader({ title, description }: { title: string, description: string }) {
    return <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-(--text)">
            {title}
        </h1>
        <p className="text-md font-light text-(--text-light)">
            {description}
        </p>
    </div>
}
export default AuthHeader;
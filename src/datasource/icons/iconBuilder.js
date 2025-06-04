
class IconBuilder {

    getIcon = (category) => {

        if (!category) return "💻"; // Default emoji

        const categoryLower = category.toLowerCase();

        if (categoryLower.includes("frontend")) return "🎨";
        if (categoryLower.includes("backend")) return "⚙️";
        if (categoryLower.includes("tools")) return "🔧";
        if (categoryLower.includes("database")) return "🗄️";
        if (categoryLower.includes("devops")) return "🚀";
        if (categoryLower.includes("mobile")) return "📱";
        if (categoryLower.includes("design")) return "✏️";
        if (categoryLower.includes("language")) return "🔤";
        if (categoryLower.includes("soft")) return "🤝";
        if (categoryLower.includes("react")) return "⚛️";
        if (categoryLower.includes("javascript")) return "🟨";
        if (categoryLower.includes("html")) return "🌐";
        if (categoryLower.includes("css")) return "🎨";

        return "💻"; // Default emoji
    };

}

export default new IconBuilder();

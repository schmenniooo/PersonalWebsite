
class IconBuilder {

    getTechEmoji = (tech) => {
        if (!tech) return "💻"; // Default emoji

        const techLower = tech.toLowerCase();
        if (techLower.includes("react")) return "⚛️";
        if (techLower.includes("javascript")) return "🟨";
        if (techLower.includes("html")) return "🌐";
        if (techLower.includes("css")) return "🎨";
        return "💻"; // Default emoji
    };

    getCategoryIcon = (category) => {
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
        return "💻"; // Default emoji
    };

}

export default new IconBuilder();

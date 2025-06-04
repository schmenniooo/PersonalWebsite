
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

    getCareerStageIcon = (stageKey) => {
        if (!stageKey) return "👨‍💻"; // Default emoji

        const stageIcons = {
            career_stage1: "🚀", // First encounter
            career_stage2: "💼", // Apprenticeship
            career_stage3: "🌱", // Growth
        };

        return stageIcons[stageKey] || "👨‍💻"; // Return matching icon or default
    };

    getParagraphIcon = (index) => {
        switch (index) {
            case 0:
                return "🚀"; // First paragraph - passion and growth
            case 1:
                return "💻"; // Second paragraph - skills
            case 2:
                return "⏱️"; // Third paragraph - experience
            default:
                return "👨‍💻"; // Default developer emoji
        }
    };

}

export default new IconBuilder();

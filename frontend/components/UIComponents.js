export const BrandName = () => (
    <div className="absolute top-8 left-8 text-lg font-semibold text-gray-900 opacity-60 tracking-wide z-20">
        Class Test Planner
    </div>
);

export const Copyright = () => (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-500 opacity-60 z-20 tracking-wide">
        © 2026 Asif Azad
    </div>
);

export const AddCourseButton = ({ onClick }) => (
    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20">
        <button onClick={onClick} className="bg-accent hover:bg-accent-light text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer">
            + Add Course
        </button>
    </div>
);

export const LoadingState = () => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Loading...</h2>
    </div>
);

export const EmptyState = () => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-gray-500">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">No class tests yet</h2>
        <p className="text-base">Click "Add Course" below to get started</p>
    </div>
);

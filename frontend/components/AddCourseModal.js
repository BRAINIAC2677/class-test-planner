const ModalHeader = ({ title, onClose }) => (
    <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <button onClick={onClose} className="w-9 h-9 flex items-center justify-center rounded-md text-gray-500 text-3xl hover:bg-gray-100 hover:text-gray-900 transition-all cursor-pointer">×</button>
    </div>
);

const FormInput = ({ label, type = 'text', ...props }) => (
    <div className="mb-6">
        <label className="block text-sm font-medium text-gray-900 mb-2.5">{label}</label>
        <input
            type={type}
            {...props}
            onChange={(e) => props.onChange(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 px-3.5 py-3 rounded-lg text-gray-900 text-base outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(20,184,166,0.1)]"
        />
    </div>
);

export const AddCourseModal = ({ show, onClose, formData, onFormChange, onSubmit }) => (
    <div className={`fixed top-0 right-0 h-screen w-[420px] bg-white border-l border-gray-200 shadow-2xl z-50 p-10 overflow-y-auto transition-transform duration-300 ease-out ${show ? 'translate-x-0' : 'translate-x-full'}`}>
        <ModalHeader title="Add New Course" onClose={onClose} />
        <form onSubmit={onSubmit}>
            <FormInput label="Course Code" placeholder="CSE-216" value={formData.courseCode} onChange={(val) => onFormChange({ ...formData, courseCode: val })} required />
            <FormInput label="Course Name" placeholder="Database" value={formData.courseName} onChange={(val) => onFormChange({ ...formData, courseName: val })} required />
            <FormInput label="Credits (1-4)" type="number" min="1" max="4" value={formData.credits} onChange={(val) => onFormChange({ ...formData, credits: val === '' ? '' : parseInt(val) })} />
            <FormInput label="Target Marks (0-80)" type="number" min="0" max="80" value={formData.targetMarks} onChange={(val) => onFormChange({ ...formData, targetMarks: val === '' ? '' : parseInt(val) })} />
            <button type="submit" className="w-full bg-accent hover:bg-accent-light text-white font-semibold px-4 py-4 rounded-lg text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-px cursor-pointer">
                Add Course
            </button>
        </form>
    </div>
);

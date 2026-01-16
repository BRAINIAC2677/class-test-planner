export const EditMarksModal = ({ test, marks, onMarksChange, onClose, onSave }) => (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[200] animate-fadeIn" onClick={onClose}>
        <div className="bg-white px-10 py-10 rounded-2xl min-w-[360px] border border-gray-200 shadow-2xl animate-slideUp" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl mb-2 text-gray-900">{test.courseCode} - CT {test.TEST_NUMBER}</h3>
            <p className="text-gray-500 text-sm mb-6">{test.courseName}</p>
            <input
                type="number"
                min="0"
                max="20"
                step="0.5"
                placeholder="Enter marks (0-20)"
                value={marks}
                onChange={(e) => onMarksChange(e.target.value)}
                autoFocus
                className="w-full bg-gray-50 border border-gray-200 px-3.5 py-3 rounded-lg text-gray-900 text-base outline-none mb-6 focus:border-accent focus:shadow-[0_0_0_3px_rgba(20,184,166,0.1)]"
            />
            <div className="flex gap-3">
                <button onClick={onClose} className="flex-1 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-400 text-gray-900 font-semibold px-4 py-3.5 rounded-lg text-base transition-all cursor-pointer">Cancel</button>
                <button onClick={onSave} className="flex-1 bg-accent hover:bg-accent-light text-white font-semibold px-4 py-3.5 rounded-lg text-base transition-all shadow-md hover:shadow-lg cursor-pointer">Save</button>
            </div>
        </div>
    </div>
);

const Bubble = ({ bubble, onClick }) => (
    <div
        className="absolute rounded-full flex items-center justify-center font-semibold text-lg transition-all duration-400 ease-out border-[3px] animate-float backdrop-blur-xl hover:scale-125 hover:-translate-y-2 hover:shadow-2xl hover:z-10 cursor-pointer"
        style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: bubble.x,
            top: bubble.y,
            transform: 'translate(-50%, -50%)',
            animationDelay: `${bubble.TEST_NUMBER * 0.2}s`,
            background: bubble.courseColor.bg,
            borderColor: bubble.courseColor.border,
            color: bubble.courseColor.text,
            boxShadow: `0 8px 32px ${bubble.courseColor.border}20, 0 2px 8px ${bubble.courseColor.border}10, inset 0 1px 1px rgba(255, 255, 255, 0.6)`
        }}
        onClick={onClick}
    >
        {bubble.MARKS_OBTAINED !== null ? bubble.MARKS_OBTAINED : '?'}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap text-center font-medium">
            {bubble.courseCode} CT{bubble.TEST_NUMBER}
        </div>
    </div>
);

export const Timeline = ({ bubbles, onBubbleClick }) => (
    <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute top-1/2 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20 -translate-y-1/2" />
        <div className="relative w-[84%] h-[70%]">
            {bubbles.map((bubble) => (
                <Bubble key={bubble.CT_ID} bubble={bubble} onClick={() => onBubbleClick(bubble)} />
            ))}
        </div>
    </div>
);

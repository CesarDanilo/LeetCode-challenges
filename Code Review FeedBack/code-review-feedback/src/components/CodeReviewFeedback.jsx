import React, { useState } from "react";

const FeedbackSystem = () => {
    const aspects = ["Readability", "Performance", "Security", "Documentation", "Testing"];

    const [votes, setVotes] = useState(
        aspects.reduce((acc, aspect) => {
            acc[aspect] = { upvote: 0, downvote: 0 };
            return acc;
        }, {})
    );

    const handleVote = (aspect, type) => {
        setVotes(prevVotes => ({
            ...prevVotes,
            [aspect]: {
                ...prevVotes[aspect],
                [type]: prevVotes[aspect][type] + 1
            }
        }));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {aspects.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-2xl font-semibold mb-4">{item}</h2>
                    <div className="flex gap-4 mb-6">
                        <button
                            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
                            onClick={() => handleVote(item, 'upvote')}
                        >
                            👍 Upvote
                        </button>
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                            onClick={() => handleVote(item, 'downvote')}
                        >
                            👎 Downvote
                        </button>
                    </div>
                    <p className="text-lg mb-2">
                        Upvotes: <strong>{votes[item]?.upvote || 0}</strong>
                    </p>
                    <p className="text-lg">
                        Downvotes: <strong>{votes[item]?.downvote || 0}</strong>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default FeedbackSystem;

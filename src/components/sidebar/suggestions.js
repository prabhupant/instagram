import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedProfiles } from '../../services/firebase';

export default function Suggestions({ userId, following }) {
    const [profiles, setProfiles] = useState(null);

    useEffect(() => {
        async function suggestedProfiles() {
            const response = await getSuggestedProfiles(userId, following);
            setProfiles(response);
        }

        if (userId) {
            suggestedProfiles();
        }
        
        console.log('profiles', profiles); 

    }, [userId]);

    
    return !profiles ? (
        <Skeleton count={10} height={150} className="mt-5" />
    ) : profiles.length > 0 ? (
        <div className="rounded flex flex-col">
            <div className="text-sm flex items-center align-item justify-between mb-2">
                <p className="font-bold text-gray-base">
                    Suggestions for you
                </p>
            </div>
        </div>
    ) : null;
}

Suggestions.PropTypes = {
    userId: PropTypes.string,
    following: PropTypes.array
};
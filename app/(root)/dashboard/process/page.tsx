"use client"
import Image from 'next/image';

export default function ProcessPage() {
    const handleDetectClick = async () => {
        try {
            const response = await fetch('//localhost:8000/showcase/detect', {
                method: 'GET', // Or POST, PUT, etc.
                headers: {
                    'Content-Type': 'application/json',
                    // Add other necessary headers like Authorization if required
                },
                // body: JSON.stringify(data), // If you're sending data
            }); // Replace '/detect' with your actual API endpoint
            if (!response.ok) {
                console.error('Error fetching detect:', response.status);
                return;
            }
            const data = await response.json();
            console.log('Detect Response:', data);
            // Handle the response data as needed
        } catch (error) {
            console.error('Error fetching detect:', error);
        }
    };

    const handleLoadSingleClick = async () => {
        try {
            const response = await fetch('//localhost:8000/showcase/loadsingle', {
                method: 'GET', // Or POST, PUT, etc.
                headers: {
                    'Content-Type': 'application/json',
                    // Add other necessary headers like Authorization if required
                },
                // body: JSON.stringify(data), // If you're sending data
            }); // Replace '/load-single' with your actual API endpoint
            if (!response.ok) {
                console.error('Error fetching load single:', response.status);
                return;
            }
            const data = await response.json();
            console.log('Load Single Response:', data);
            // Handle the response data as needed
        } catch (error) {
            console.error('Error fetching load single:', error);
        }
    };

    const handleLoadAllClick = async () => {
        try {
            const response = await fetch('http://localhost:8000/showcase/detect', {
                method: 'GET', // Or POST, PUT, etc.
                headers: {
                    'Content-Type': 'application/json',
                    // Add other necessary headers like Authorization if required
                },
                // body: JSON.stringify(data), // If you're sending data
            });

            // Replace '/load-all' with your actual API endpoint
            if (!response.ok) {
                console.error('Error fetching load all:', response.status);
                return;
            }
            const data = await response.json();
            console.log('Load All Response:', data);
            // Handle the response data as needed
        } catch (error) {
            console.error('Error fetching load all:', error);
        }
    };

    const handleMoveConveyorClick = async () => {
        try {
            const response = await fetch('//localhost:8000/io/move_conveyor', {
                method: 'GET', // Or POST, PUT, etc.
                headers: {
                    'Content-Type': 'application/json',
                    // Add other necessary headers like Authorization if required
                },
                // body: JSON.stringify(data), // If you're sending data
            }); // Replace '/api/move-conveyor' with your actual API endpoint
            if (!response.ok) {
                console.error('Error fetching move conveyor:', response.status);
                return;
            }
            const data = await response.json();
            console.log('Move Conveyor Response:', data);
            // Handle the response data as needed
        } catch (error) {
            console.error('Error fetching move conveyor:', error);
        }
    };
    return (
        <div className="flex flex-1 flex-col items-center justify-center">
            {/* Image at the top center */}
            <div className="mb-8">
                <Image src={"/connector.png"} alt="Process Image" width={200} height={150} objectFit="contain" />
            </div>

            {/* Two lines of simple h2 text */}
            <div className="mb-12 text-center">
                <h2 className="text-2xl font-semibold text-gray-900">Showcase mode</h2>
                <h2 className="text-2xl text-gray-700">Initiate Actions Below</h2>
                <h1 className="text-xl font-bold text-center">Selected connector:</h1>
                <h2 className="text-lg text-center">ID: 12898</h2>
            </div>

            {/* Buttons fetching API endpoints, horizontally arranged with larger vertical space */}
            <div className="flex space-x-4">
                <button onClick={handleDetectClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Detect
                </button>
                <button onClick={handleLoadSingleClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Load Single
                </button>
                <button onClick={handleLoadAllClick} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                    Load All
                </button>
                <button onClick={handleMoveConveyorClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Move Conveyor
                </button>
            </div>
        </div>
    );
}
export async function enableVacuumAction(enable: boolean) {
    try {
      const res = await fetch('http://localhost:8000/io/write_enable_vacuum', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ enable }),
        cache: 'no-store',
      });
  
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
  
      const data = await res.json();
  
      if (data.response === 'ok') {
        return { success: true };
      } else {
        return { success: false, error: data.error || 'Unknown error' };
      }
    } catch (error) {
      console.error('enableVacuumAction error:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }
export async function writeVacuumAction(){

}

export async function writeConveyorAction(){

}

export async function writeDoorAction(){

}

export async function writeLightAction(){

}
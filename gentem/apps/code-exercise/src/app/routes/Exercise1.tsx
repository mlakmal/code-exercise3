import { ITrack, SongsApi } from '@gentem/utility/shared';
import { ITableRow, Table } from '@gentem/ux';
import { Alert, CircularProgress, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

interface ITrackRow extends ITableRow {
  data: ITrack;
}

async function getPopTrackRows(
  tracks: ITrack[],
  setArtist: (artistName: string, index: number) => void
): Promise<ITrackRow[]> {
  return tracks.map((track) => {
    return {
      columns: [
        {
          name: 'trackName',
          content: track.trackName,
        },
        {
          name: 'artistName',
          content: track.artistName,
          componentType: 'textbox',
        },
        {
          name: 'primaryGenreName',
          content: track.primaryGenreName,
        },
      ],
      data: track,
    };
  });
}

export function Exercise1() {
  const [rows, setRows] = useState<ITrackRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTracks();
  }, []);

  const getTracks = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await SongsApi.getPopTracks();
      const rows = await getPopTrackRows(
        response.data.results,
        (artistName: string, index: number) => {
          rows[index].data.artistName = artistName;
        }
      );
      setRows(rows);
    } catch (error) {
      setRows([]);
      setError(true);
    }
    setLoading(false);
  };

  return (
    <>
    <p>Improve performance of this table when textbox data is modified</p>
      <Table
        headers={[{ label: 'Title' }, { label: 'Artist' }, { label: 'Genre' }]}
        rows={rows}
        onDataChange={(rowIndex, columnIndex, _name, value) => {
          rows[rowIndex].columns[columnIndex].content = value;
          setRows([...rows]);
        }}
      />
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '1rem' }}>
          <CircularProgress />
        </div>
      )}
      {error && <Alert severity="error">Loading Error</Alert>}
    </>
  );
}

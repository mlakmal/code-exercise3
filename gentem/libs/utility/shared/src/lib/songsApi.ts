import { HttpClient } from '@gentem/utility/http';

export interface ITrack{
    artistName: string;
    trackName: string;
    primaryGenreName: string;
}

export interface ITrackResponse{
    results: ITrack[];
    resultCount: number
}

export class SongsApi {
  public static getPopTracks() {
    return HttpClient.request<ITrackResponse>({
      url: '/proxy/itunes/search?limit=500&term=pop',
      method: 'GET',
    });
  }
}

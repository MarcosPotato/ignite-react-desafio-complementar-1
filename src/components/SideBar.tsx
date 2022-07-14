import { Button } from './Button';
import { Genre } from '../@types/Films';

import '../styles/sidebar.scss';

interface SideNavProps {
  selection: number
  genres: Genre[]
  onSelectGenre: (genre_id: number) => void 
}

export function SideBar({ genres, selection, onSelectGenre }: SideNavProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        { genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => onSelectGenre(genre.id)}
              selected={ selection === genre.id }
            />
        ))}
      </div>

    </nav>
  )
}
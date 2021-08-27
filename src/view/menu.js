const ACTIVE = 'trip-tabs__btn--active';
export const Routs = {
  TABLE: 'table',
  STATS: 'stats',
};

const isSelected = (flag) => flag? ACTIVE : '';
export const template = (current) => `<div class="trip-controls__navigation">
        <h2 class="visually-hidden">Switch trip view</h2>
        <nav class="trip-controls__trip-tabs  trip-tabs">
          <a class="trip-tabs__btn ${isSelected(current === Routs.TABLE)}" href="#">Table</a>
          <a class="trip-tabs__btn ${isSelected(current === Routs.STATS)}" href="#">Stats</a>
        </nav>
      </div>`;


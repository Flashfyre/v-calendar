<script>
import CalendarDay from './CalendarDay';
import { childMixin, safeScopedSlotMixin } from '../utils/mixins';
import { getPopoverTriggerEvents } from '../utils/popovers';

export default {
  name: 'CalendarPane',
  mixins: [childMixin, safeScopedSlotMixin],
  render(h) {
    // Header
    const header =
      this.safeScopedSlot('header', this.page) ||
      // Default header
      h(
        'div',
        {
          class: `vc-header align-${this.titlePosition}`,
        },
        [
          // Header title
          h(
            'div',
            {
              class: 'vc-title',
              on: this.navPopoverEvents,
            },
            [this.safeScopedSlot('header-title', this.page, this.page.title)],
          ),
        ],
      );
    // Weeks
    const weeks = h(
      'div',
      {
        class: 'vc-weeks',
      },
      [
        ...this.weekdayLabels.map((wl, i) =>
          h(
            'div',
            {
              key: i + 1,
              class: ['vc-weekday', `weekday-position-${i + 1}`],
            },
            [wl],
          ),
        ),
        ...this.page.days.map(day =>
          h(CalendarDay, {
            attrs: {
              ...this.$attrs,
              day,
            },
            on: {
              ...this.$listeners,
            },
            scopedSlots: this.$scopedSlots,
            key: day.id,
            ref: 'days',
            refInFor: true,
          }),
        ),
      ],
    );

    return h(
      'div',
      {
        class: 'vc-pane',
        ref: 'pane',
      },
      [header, weeks],
    );
  },
  inheritAttrs: false,
  props: {
    page: Object,
    position: Number,
    titlePosition: String,
    navVisibility: String,
  },
  computed: {
    navVisibility_() {
      return this.propOrDefault('navVisibility', 'navVisibility');
    },
    navPlacement() {
      switch (this.titlePosition) {
        case 'left':
          return 'bottom-start';
        case 'right':
          return 'bottom-end';
        default:
          return 'bottom';
      }
    },
    navPopoverEvents() {
      const {
        sharedState,
        navVisibility_,
        navPlacement,
        page,
        position,
      } = this;
      return getPopoverTriggerEvents({
        id: sharedState.navPopoverId,
        visibility: navVisibility_,
        placement: navPlacement,
        modifiers: [
          { name: 'flip', options: { fallbackPlacements: ['bottom'] } },
        ],
        data: { page, position },
        isInteractive: true,
      });
    },
    weekdayLabels() {
      return this.locale
        .getWeekdayDates()
        .map(d => this.format(d, this.masks.weekdays));
    },
  },
  methods: {
    refresh() {
      this.$refs.days.forEach(d => d.refresh());
    },
  },
};
</script>

<style lang="postcss" scoped>
.vc-pane {
  min-width: 200px;
}

.vc-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 18px 0 18px;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
}

.vc-title {
  font-size: var(--text-lg);
  color: var(--gray-800);
  font-weight: var(--font-semibold);
  line-height: 28px;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  &:hover {
    opacity: 0.75;
  }
}

.vc-weeks {
  display: grid;
  display: -ms-grid;
  grid-template-columns: repeat(7, 1fr);
  position: relative;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 5px;
}

.vc-weekday {
  text-align: center;
  color: var(--gray-500);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  line-height: 14px;
  padding-top: 4px;
  padding-bottom: 8px;
  cursor: default;
  user-select: none;
}

.vc-is-dark {
  & .vc-header {
    color: var(--gray-200);
  }
  & .vc-title {
    color: var(--gray-100);
  }
  & .vc-weekday {
    color: var(--accent-200);
  }
}
</style>

<style>
.vc-nav-popover-container {
  color: var(--white);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  background-color: var(--gray-800);
  border: 1px solid;
  border-color: var(--gray-700);
  border-radius: var(--rounded-lg);
  padding: 4px;
  box-shadow: var(--shadow);
}
.vc-is-dark .vc-nav-popover-container {
  color: var(--gray-800);
  background-color: var(--white);
  border-color: var(--gray-100);
}
</style>

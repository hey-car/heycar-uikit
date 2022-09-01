import React from 'react';
import { render } from '@testing-library/react';

import { ABSport as Icon } from '../../../icons/src/paths/ABSport';
import Pill from '../Pill';

const dataTestId = 'test-id';
const defaultChild = 'text';
const iconHtml =
  '<div class="pill"><span class="leftIcon"><svg class="svgIcon inherit" data-test-id="ABSportIcon" focusable="false" style="font-size: 24px;" viewBox="0 0 24 24"><path d="M7.20058 5.59889C6.77839 5.91601 6.38849 6.27397 6.03682 6.6669C4.76945 8.08291 4 9.9504 4 12C4 14.0496 4.76945 15.9171 6.03682 17.3331C6.38849 17.726 6.77839 18.084 7.20058 18.4011L5.99942 20.0002C5.47221 19.6042 4.98551 19.1573 4.54655 18.6669C2.96367 16.8984 2 14.5605 2 12C2 9.43944 2.96367 7.10159 4.54655 5.33307C4.9855 4.84262 5.4722 4.39576 5.99942 3.99976L7.20058 5.59889ZM17.9632 6.6669C17.6115 6.27397 17.2216 5.91601 16.7994 5.59889L18.0006 3.99976C18.5278 4.39576 19.0145 4.84262 19.4535 5.33307C21.0363 7.10159 22 9.43944 22 12C22 14.5605 21.0363 16.8984 19.4535 18.6669C19.0145 19.1573 18.5278 19.6042 18.0006 20.0002L16.7994 18.4011C17.2216 18.084 17.6115 17.726 17.9632 17.3331C19.2306 15.9171 20 14.0496 20 12C20 9.9504 19.2306 8.08291 17.9632 6.6669ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23855 14.7614 6.99998 12 6.99998C9.23858 6.99998 7 9.23855 7 12C7 14.7614 9.23858 17 12 17ZM12 19C15.866 19 19 15.866 19 12C19 8.13398 15.866 4.99998 12 4.99998C8.13401 4.99998 5 8.13398 5 12C5 15.866 8.13401 19 12 19ZM9.9705 10.84H9.0955L8.07 13.5H8.9065L9.0745 12.9505H9.9355L10.107 13.5H10.9995L9.9705 10.84ZM9.505 11.547L9.743 12.3205L9.267 12.3205L9.505 11.547ZM12.3923 10.84H11.3143V13.5H12.4973C13.1717 13.5 13.5088 13.2398 13.5088 12.7195C13.5088 12.5631 13.4703 12.429 13.3933 12.317C13.3163 12.2026 13.2102 12.1245 13.0748 12.0825C13.1705 12.0288 13.2428 11.9541 13.2918 11.8585C13.3432 11.7628 13.3688 11.6531 13.3688 11.5295C13.3688 11.3031 13.286 11.1316 13.1203 11.015C12.957 10.8983 12.7143 10.84 12.3923 10.84ZM12.4308 12.933H12.0668V12.443H12.4308C12.6152 12.443 12.7073 12.5246 12.7073 12.688C12.7073 12.8513 12.6152 12.933 12.4308 12.933ZM12.3328 11.897H12.0668V11.407H12.3328C12.5172 11.407 12.6093 11.4886 12.6093 11.652C12.6093 11.8153 12.5172 11.897 12.3328 11.897ZM14.1753 13.4895C14.3573 13.5338 14.5428 13.556 14.7318 13.556C15.0865 13.556 15.3606 13.4801 15.5543 13.3285C15.7503 13.1745 15.8483 12.9586 15.8483 12.681C15.8483 12.4616 15.7771 12.2843 15.6348 12.149C15.4948 12.0136 15.2673 11.9051 14.9523 11.8235C14.824 11.7908 14.7365 11.7605 14.6898 11.7325C14.6431 11.7021 14.6198 11.6625 14.6198 11.6135C14.6198 11.5575 14.6431 11.5166 14.6898 11.491C14.7365 11.463 14.8088 11.449 14.9068 11.449C15.0258 11.449 15.1518 11.4676 15.2848 11.505C15.4178 11.54 15.5298 11.5866 15.6208 11.645L15.7258 10.9975C15.6255 10.9321 15.4971 10.8808 15.3408 10.8435C15.1845 10.8038 15.0258 10.784 14.8648 10.784C14.5311 10.784 14.2698 10.8598 14.0808 11.0115C13.8941 11.1631 13.8008 11.372 13.8008 11.638C13.8008 11.8596 13.8661 12.0381 13.9968 12.1735C14.1275 12.3088 14.334 12.4126 14.6163 12.485C14.7213 12.513 14.8006 12.5375 14.8543 12.5585C14.908 12.5795 14.9465 12.6028 14.9698 12.6285C14.9955 12.6518 15.0083 12.6821 15.0083 12.7195C15.0083 12.8338 14.9021 12.891 14.6898 12.891C14.5405 12.891 14.3865 12.87 14.2278 12.828C14.0715 12.7836 13.9373 12.7253 13.8253 12.653L13.7553 13.3215C13.8533 13.3891 13.9933 13.4451 14.1753 13.4895Z" fill-rule="evenodd" /></svg></span>text</div>';

describe('Pill', () => {
  /**
   * Attributes tests
   */
  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(
        <Pill dataTestId={dataTestId}>{defaultChild} </Pill>,
      );

      expect(getByTestId(dataTestId).tagName).toBe('DIV');
    });

    it('should set text', () => {
      const { container } = render(<Pill>{defaultChild}</Pill>);

      expect(container.firstElementChild).toHaveTextContent(defaultChild);
    });

    it('should set leftIcon', () => {
      const { container } = render(
        <Pill leftIcon={<Icon />}>{defaultChild}</Pill>,
      );

      expect(container.firstElementChild).toContainHTML(iconHtml);
    });
  });

  /**
   * Classes tests
   */
  describe('Classes tests', () => {
    it('should set default `pill` class', () => {
      const { container } = render(<Pill>{defaultChild} </Pill>);

      expect(container.firstElementChild).toHaveClass('pill');
    });
  });

  /**
   * Custom component
   */
  describe('Custom component', () => {
    it('should use custom component', () => {
      const cb = jest.fn();

      cb.mockReturnValue(null);

      render(
        <Pill Component={cb} dataTestId={dataTestId}>
          Pill
        </Pill>,
      );

      expect(cb).toBeCalled();

      const props = cb.mock.calls[0][0];

      expect(props['data-test-id']).toBe(dataTestId);
    });
  });

  it('should unmount without errors', () => {
    const { unmount } = render(<Pill>{defaultChild} </Pill>);

    expect(unmount).not.toThrowError();
  });
});

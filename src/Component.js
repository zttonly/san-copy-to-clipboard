/**
 * @file config
 *  @author
 */
import san, {DataTypes} from 'san';
import copy from 'copy-to-clipboard';

export const CopyToClipboard = san.defineComponent({
    dataTypes: {
        text: DataTypes.string.isRequired,
        href: DataTypes.string,
        options: DataTypes.shape({
            debug: DataTypes.bool,
            message: DataTypes.string
        })
    },
    initData() {
        return {
            options: null
        };
    },

    handleClick(event) {
        const {text, options} = this.data.get();
        const result = copy(text, options);

        this.fire('copy', {text, result});
    },

    template: `
        <div on-click="handleClick">
            <slot />
        </div>
    `
});


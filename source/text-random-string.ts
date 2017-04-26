/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by a GPLv3 license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-key
 */

export function randomString(alphabet: string, length: number): string {

    const buffer: string[] = [];

    /*tslint:disable:no-bitwise*/
    length = length | 0;
    while (length) {
        const r = (Math.random() * alphabet.length) | 0;
        buffer.push(alphabet.charAt(r));
        length -= 1;
    }
    /*tslint:enable:no-bitwise*/

    return buffer.join("");
}
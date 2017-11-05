/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Track the trade of a commodity from one trader to another
 * @param {bps.gub.uy.BuildRequest} tx - the trade to be processed
 * @transaction
 */
function buildRequest(tx) {
    return getAssetRegistry('bps.gub.uy.Request')
        .then(function (assetRegistry) {
            return assetRegistry.update(tx.asset);
        })
}

/**
 * Track the trade of a commodity from one trader to another
 * @param {bps.gub.uy.BPSApproval} tx - the trade to be processed
 * @transaction
 */
function approveBPS(tx) {
    if (tx.asset.workHours < 100) {
        tx.asset.bps = true;
    }else {
        tx.asset.bps = false;
    }
    return getAssetRegistry('bps.gub.uy.Request')
        .then(function (assetRegistry) {
            return assetRegistry.update(tx.asset);
        });
}

/**
 * Track the trade of a commodity from one trader to another
 * @param {bps.gub.uy.DGIApproval} tx - the trade to be processed
 * @transaction
 */
function approveDGI(tx) {
    if (tx.asset.bps) {
        tx.asset.dgi = true;
    }
    return getAssetRegistry('bps.gub.uy.Request')
        .then(function (assetRegistry) {
            return assetRegistry.update(tx.asset);
        });
}